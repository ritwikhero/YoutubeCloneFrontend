import { SearchBar } from "./Searchbar"

export const AppBar = () =>{
    return <div className="flex justify-between">
            <div>
            Youtube
            </div>
            <div>
            <SearchBar/>
            </div>
            <div>
                Sign in
            </div>
    </div>
}