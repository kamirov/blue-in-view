import * as React from "react";

import IndexLayout from "../layouts";
import styled from "@emotion/styled";
import Filter from "../components/Filter";
import {graphql} from "gatsby";
import {List} from "../library/list.module";
import VideoPlayer from "../components/VideoPlayer";
import {colors} from "../theme";
import Container from "../components/Container";
import {dimensions} from "../styles/dimensions";

type Props = {
    data : {
        filters: {
            edges: FilterNode[]
        }
    }
}

type FilterNode = {
    node: {
        id: string
        url: string
        country: string
        region: string
        city: string
        takenAt: string
        submittedAt: string
        officer: Officer
        recorder: Recorder
    }
}

type Officer = {
    name: string
}

type Recorder = {
    name: string
    email: string
}

type State = {
    selectedCountry: string
    selectedRegion: string
    selectedCity: string
    selectedOfficer: string
    countries: string[]
    regions: string[]
    cities: string[]
    officers: string[],
    videos: Video[]
}

type Video = {
    url: string,
    takenAt: string,
    submittedAt: string,
    recorderName: string,
    recorderEmail: string
}

const allOfficersLabel = "-- All --"

class IndexPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const urlParams = new URLSearchParams(window.location.search)
        const urlCountry = urlParams.get('country') || ""
        const urlRegion = urlParams.get('region') || ""
        const urlCity = urlParams.get('city') || ""
        const urlOfficer = urlParams.get('officer') || ""

        const countries = List.distinct(this.props.data.filters.edges.map(f => f.node.country)) as string[]

        const selectedCountry = countries.includes(urlCountry) ? urlCountry : countries[0]

        const regions = this.getRegions(selectedCountry)
        const selectedRegion = regions.includes(urlRegion) ? urlRegion : regions[0]

        const cities = this.getCities(selectedCountry, selectedRegion)
        const selectedCity = cities.includes(urlCity) ? urlCity : cities[0]

        const officers = this.getOfficerNames(selectedCountry, selectedRegion, selectedCity)
        const selectedOfficer = officers.includes(urlOfficer) ? urlOfficer : allOfficersLabel

        const videos = this.getVideos(selectedCountry, selectedRegion, selectedCity, selectedOfficer)

        this.state = {
            selectedCountry,
            selectedRegion,
            selectedOfficer,
            selectedCity,
            countries,
            regions,
            cities,
            officers,
            videos
        }

        this.updateUrl(selectedCountry, selectedRegion, selectedCity, selectedOfficer)

        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.handleRegionChange = this.handleRegionChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleOfficerChange = this.handleOfficerChange.bind(this)

        this.toVideoPlayer = this.toVideoPlayer.bind(this)
    }

    handleCountryChange(selectedCountry: string) {
        const regions = this.getRegions(selectedCountry)
        const selectedRegion = regions[0]

        const cities = this.getCities(selectedCountry, selectedRegion)
        const selectedCity = cities[0]

        const officers = this.getOfficerNames(selectedCountry, selectedRegion, selectedCity)
        const selectedOfficer = officers[0]

        const videos = this.getVideos(selectedCountry, selectedRegion, selectedCity, selectedOfficer)

        this.setState({
            ...this.state,
            regions,
            cities,
            officers,
            videos,
            selectedCountry,
            selectedRegion,
            selectedCity,
            selectedOfficer
        })

        this.updateUrl(selectedCountry, selectedRegion, selectedCity, selectedOfficer)
    }

    handleRegionChange(selectedRegion: string) {
        const cities = this.getCities(this.state.selectedCountry, selectedRegion)
        const selectedCity = cities[0]

        const officers = this.getOfficerNames(this.state.selectedCountry, selectedRegion, selectedCity)
        const selectedOfficer = officers[0]

        const videos = this.getVideos(this.state.selectedCountry, selectedRegion, selectedCity, selectedOfficer)

        this.setState({
            ...this.state,
            cities,
            officers,
            videos,
            selectedRegion,
            selectedCity,
            selectedOfficer,
        })

        this.updateUrl(this.state.selectedCountry, selectedRegion, selectedCity, selectedOfficer)
    }

    handleCityChange(selectedCity: string) {
        const officers = this.getOfficerNames(this.state.selectedCountry, this.state.selectedRegion, selectedCity)
        const selectedOfficer = officers[0]

        const videos = this.getVideos(this.state.selectedCountry, this.state.selectedRegion, selectedCity, selectedOfficer)

        this.setState({
            ...this.state,
            officers,
            videos,
            selectedCity,
            selectedOfficer,
        })

        this.updateUrl(this.state.selectedCountry, this.state.selectedRegion, selectedCity, selectedOfficer)
    }

    handleOfficerChange(selectedOfficer: string) {
        const videos = this.getVideos(this.state.selectedCountry, this.state.selectedRegion, this.state.selectedCity, selectedOfficer)

        this.setState({
            ...this.state,
            videos,
            selectedOfficer
        })

        this.updateUrl(this.state.selectedCountry, this.state.selectedRegion, this.state.selectedCity, selectedOfficer)
    }

    private getRegions(country: string): string[] {
        const regionsWithDuplicates = this.props.data.filters.edges
            .filter(f => f.node.country === country)
            .map(f => f.node.region)

        return List.distinct(regionsWithDuplicates) as string[]
    }

    private getCities(country: string, region: string): string[] {
        const citiesWithDuplicates = this.props.data.filters.edges
            .filter(f => f.node.country === country && f.node.region === region)
            .map(f => f.node.city)

        return List.distinct(citiesWithDuplicates) as string[]
    }

    private getOfficerNames(country: string, region: string, city: string): string[] {
        const officersWithDuplicates = this.props.data.filters.edges
            .filter(o => o.node.country === country && o.node.region === region && o.node.city === city)
            .map(o => o.node.officer.name)

        return List.distinct([ allOfficersLabel, ...officersWithDuplicates]) as string[]
    }

    private getVideos(country: string, region: string, city: string, officerName: string): Video[] {
        return this.props.data.filters.edges
            .filter(o => o.node.country === country && o.node.region === region && o.node.city === city)
            .filter(f => officerName === allOfficersLabel || officerName === f.node.officer.name)
            .map(f => ({
                url: f.node.url,
                takenAt: f.node.takenAt,
                submittedAt: f.node.submittedAt,
                recorderName: f.node.recorder.name,
                recorderEmail: f.node.recorder.email
            }))
    }

    private updateUrl(country: string, region: string, city: string, officerName: string) {
        const url = new URL(window.location.href);

        url.searchParams.set('country', country)
        url.searchParams.set('region', region)
        url.searchParams.set('city', city)

        if (officerName === allOfficersLabel) {
            url.searchParams.delete('officer')
        } else {
            url.searchParams.set('officer', officerName)
        }

        const newUrl = url.toString()

        window.history.replaceState({}, window.document.title, newUrl)
    }

    private toMenuItem(value: string) {
        return <option key={value} value={value}>{value}</option>
    }

    private toVideoPlayer(video: Video) {
        const title = `Video of ${this.state.selectedOfficer}`
        return <StyledVideoPlayer url={video.url} title={title} key={video.url} />
    }

    render() {
        if (!this.state.selectedOfficer) {
            return null
        }

        const countryItems = this.state.countries.map(this.toMenuItem)
        const regionItems = this.state.regions.map(this.toMenuItem)
        const cityItems = this.state.cities.map(this.toMenuItem)
        const officerItems = this.state.officers.map(this.toMenuItem)

        const videoPlayers = this.state.videos.map(this.toVideoPlayer)

        const regionLabel = this.state.selectedCountry === `United States` ? `State`
            : this.state.selectedCountry === `Canada` ? `Province`
                : `Region`

        return (
            <IndexLayout>
                <FilterBar>
                    <Container>
                        <StyledFilter label="Country" value={this.state.selectedCountry} onChange={this.handleCountryChange}>{countryItems}</StyledFilter>
                        <StyledFilter label={regionLabel} value={this.state.selectedRegion} onChange={this.handleRegionChange}>{regionItems}</StyledFilter>
                        <StyledFilter label="City" value={this.state.selectedCity} onChange={this.handleCityChange}>{cityItems}</StyledFilter>
                        <StyledFilter label="Officer" value={this.state.selectedOfficer} onChange={this.handleOfficerChange}>{officerItems}</StyledFilter>
                    </Container>
                </FilterBar>

                <Container>
                    <VideoGallery>
                        {videoPlayers}
                    </VideoGallery>
                </Container>
            </IndexLayout>
        );
    }
}

const VideoGallery = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding-top: 2rem;
    // border-top: 2px solid ${colors.secondary}
`

const StyledVideoPlayer = styled(VideoPlayer)`
    width: 40%;
    height: 20rem;
    margin: 0 1rem;
`

const FilterBar = styled.div`
    background: ${colors.primary};
    padding: 1rem ${dimensions.containerSidePadding};

    > * {
        display: flex;
        justify-content: space-around;
    }
`

const StyledFilter = styled(Filter)`
    width: 20%;
    margin: 0 5% 0 0;
`

export const query = graphql`
    query IndexQuery {
        filters: allDataJson {
            edges {
                node {
                    id
                    url
                    country
                    region
                    city
                    takenAt
                    submitedAt
                    recorder {
                        name
                        email
                    }
                    officer {
                        name
                    }
                }
            }
        }
    }
`;

export default IndexPage;
