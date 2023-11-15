import{Input} from 'antd'
import './header.css'

export function HeaderTableAdmin({searcs,handleSearch}){
    //const search=""
    return(
        <div
        className="headers">
                <p style={{
                    flexGrow:'1',
                    display:'flex'
                }}>Shows {10} Entries</p>
                <Input.Search
                style={{width:'300px'}}
                onChange={handleSearch}
                placeholder='Search'
                value={searcs}></Input.Search>
        </div>
    )
}