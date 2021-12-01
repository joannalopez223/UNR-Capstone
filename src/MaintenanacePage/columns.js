//create the columns for request table
//funtion: mapped each column to a specific data in the request data

export const COLUMNS = [
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Date requested',
        accessor: 'date_requested'
    },
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Priority',
        accessor: 'priority_level'
    },
    {
        Header: 'Severity',
        accessor: 'severity_level'
    },
    {
        Header: 'Location',
        accessor: 'location'
    }
]