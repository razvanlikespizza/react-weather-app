import React, {useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import '../../styles/Search.scss';

const Search = ({getWeatherInfo}) => {
    let [search, setSearch] = useState(null);

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
        <AsyncPaginate 
            placeholder = "Please type your city."
            debounceTimeout={1000}
            value={search}
            onChange={handleSearch}
            loadOptions={loadOptions}
        />
    );
}

export default Search;