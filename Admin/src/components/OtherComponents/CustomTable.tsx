/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delete, Edit } from "@mui/icons-material";
import { 
    IconButton, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow 
} from "@mui/material"

interface Column{
    id: string;
    label: string;
}

interface Row{
    [key: string]: any;
}

interface CustomTableProps{
    columns: Column[];
    rows: Row[];
    onEdit?:(id: string) => void;
    onDelete?:(id: string) => void;
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, rows, onEdit,onDelete}) => {
    if (!Array.isArray(rows)) {
        console.error("rows is not an array:", rows);
        rows = [];
      }
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableCell key={index}>{column.label}</TableCell>
                    ))}
                    {onEdit && <TableCell>Edit</TableCell>}
                    {onDelete && <TableCell>Delete</TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map((row, index: number) => (
                    <TableRow key={index}>
                        {columns.map((column, index: number) => (
                            <TableCell key={index}>{row[column.id]}</TableCell>
                        ))}
                        {onDelete && onEdit ?
                        (<>
                        <TableCell>
                        <IconButton onClick={() => onEdit && onEdit(row[columns[0].id])}>
                            <Edit/>
                        </IconButton>
                        </TableCell>
                        <TableCell>
                        <IconButton onClick={() => onDelete && onDelete(row[columns[0].id])}>
                            <Delete/>
                        </IconButton>
                        </TableCell>
                        </> 
                        ) : <></>
                    }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
export default CustomTable;