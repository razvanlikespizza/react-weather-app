import React, {useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import '../../styles/Search.scss';

const Search = ({getWeatherInfo}) => {
    let [search, setSearch] = useState(null);

    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            display: "inline-block",
            minWidth: "250px",
            color: "white"
        }),
        option: (provided, state) => ({
            ...provided,
            color: "white",
          }),
        menu: (provided, state) => ({
          ...provided,
          margin: 0,
          padding: 0,
          border: 0
        }),
        control: (provided, {isFocused}) => ({
            ...provided,
            outline: 0,
            border: 0,
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"
        })
    }
    const theme = (theme) => ({
            ...theme,
        colors: {
            ...theme.colors,
            primary50: "#4b4b4b",
            primary25: '#4b4b4b',
            primary: '#4b4b4b',
            neutral0: "#3d3d3d",
            neutral10: "#3d3d3d",
            neutral20: "white",
            neutral30: "white",
            neutral50: "rgba(255,255,255,0.6)",
            neutral60: "white",
            neutral70: "white",
            neutral80: "white",
            neutral90: "white"
        }
    });

    const loadOptions = (search) => {
        return fetch(`/api/geodb?namePrefix=${search}`)
                .then(res => res.json())
                .then(({data}) => {
                    return {
                        options: data.map((city) => {
                            return {
                                value: {
                                    lat: city.latitude,
                                    lon: city.longitude
                                },
                                label: `${city.name}, ${city.country}`
                            }
                        })
                    };
                })
                .catch((err) => {
                    console.log(err);
                })
    }
    const handleSearch = (search) => {
        setSearch(search);
        getWeatherInfo(search);
    }
    return(
        <AsyncPaginate className='searchbar'
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            styles={customStyles}
            theme={theme}
            placeholder = "Please type your city."
            debounceTimeout={1000}
            value={search}
            onChange={handleSearch}
            loadOptions={loadOptions}
        />
    );
}

export default Search;