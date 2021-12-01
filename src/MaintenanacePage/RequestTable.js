//request table component

import React, {useMemo} from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import RequestData from './RequestData.json'
import { COLUMNS } from './columns'
import './table.css'
import { SearchRequest } from './SearchRequest';
import Search from './Search';


export const RequestTable = () => {

    const columns = useMemo( () => COLUMNS, [])
    const data = useMemo ( () => RequestData, [])

    /*
    * creating an instance of a table
    * destructering table element 
    * functions and arrays from useTable hook from react table package given to enable easy table creation 
    * use this with html (in return) to make the table     
    */
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
         columns, 
         data 
    }, 
        useGlobalFilter
    )

    const { globalFilter } = state

    

    return (
        <>
         <SearchRequest filter={globalFilter} setFilter={setGlobalFilter} />
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
            

          </table>
        </>
    )

}