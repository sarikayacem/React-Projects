function Table({ data, config, keyFN }) {

    const renderedHeaders = config.map((column) => {

        if(column.header){
            return column.header();
        }

        return (
            <th key={column.label}>{column.label}</th>
        )
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr className="border-b" key={keyFN(rowData)}>
                {renderedCells}
            </tr>
        );
    });


    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
}

export default Table;