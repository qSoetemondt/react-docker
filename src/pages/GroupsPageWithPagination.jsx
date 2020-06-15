import React, {useEffect, useState} from 'react';
import axios from "axios";
import Pagination from '../components/Pagination';
const GroupsPageWithPagination = (props) => {
    const itemsPerPage = 10;
    const[groups, setGroups] = useState([]);
    const [currentPage, setCurrentPage] =useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get(`http://idealco.qsoetemondt.netideal.pro/api/platform/groups?page=${currentPage}&itemsPerPage=${itemsPerPage}`)
        .then(response => {
            setGroups(response.data['hydra:member']);
            setTotalItems(response.data["hydra:totalItems"]);
            setLoading(false);
            }
        )
        
    }, [currentPage])

    const handlePageChange = (page) => {
        setLoading(true);
        setCurrentPage(page);
    }


    const paginatedGroups = Pagination.getData(groups, currentPage, itemsPerPage);

    return (
    <>
     <h1>liste groupes pagination</h1>

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
                {groups.length === 0 && <tr><td>Chargement ...</td></tr>}
                {!loading && 
                groups.map(group =>
                <tr key={group.id}>
                    <td>{group.id}</td>
                    <td>{group.name}</td>
                    <td>{group.description}</td>
                </tr>
                    )}
                
            </tbody>
        </table>

    <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} length={totalItems} onPageChange={handlePageChange}/>
        
    </>
    );
}
 
export default GroupsPageWithPagination;