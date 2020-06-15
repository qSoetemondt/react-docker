import React, {useEffect, useState} from 'react';
import axios from "axios";
import Pagination from '../components/Pagination';
const GroupsPage = (props) => {

    const [groups, setGroups] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('http://idealco.qsoetemondt.netideal.pro/api/platform/groups')
        .then(response => response.data['hydra:member'])
        .then(data => setGroups(data));
    }, [])

    const handleSearch = event => {
        const value = event.currentTarget.value;
        setSearch(value);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const itemsPerPage = 10;
    const filteredGroups = groups.filter(g => g.name.toLowerCase().includes(search.toLowerCase()));
 
    const paginatedGroups = Pagination.getData(filteredGroups, currentPage, itemsPerPage);

    return (
    <>
     <h1>liste groupes</h1>

     <div className="form-group">
         <input type="text" onChange={handleSearch} value={search} className="form-control" placeholder="Rechercher..."/>
     </div>
        <table className="table table-hover">
            <thead>
                <th>Id.</th>
                <th>Name</th>
                <th></th>
            </thead>

            <tbody>

                {paginatedGroups.map(group =>
                <tr key={group.id}>
                    <td>{group.id}</td>
                    <td>{group.name}</td>
                    <td>{group.description}</td>
                </tr>
                    )}
                
            </tbody>
        </table>
    {itemsPerPage < filteredGroups.length &&
    <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} length={filteredGroups.length} onPageChange={handlePageChange}/>
    }
    </>
    );
}
 
export default GroupsPage;