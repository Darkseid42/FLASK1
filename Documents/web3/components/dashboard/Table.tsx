import React from 'react';

import  supabase  from '@/utils/supabaseClient';

const Table = ({coin, price}) => {
    console.log(supabase)
    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Column 1</th>
                    <th className="py-2 px-4 border-b">{coin}</th>
                    <th className="py-2 px-4 border-b">{price}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 px-4 border-b">Row 1, Cell 1</td>
                    <td className="py-2 px-4 border-b">Row 1, Cell 2</td>
                    <td className="py-2 px-4 border-b">Row 1, Cell 3</td>
                </tr>
                <tr>
                    <td className="py-2 px-4">Row 2, Cell 1</td>
                    <td className="py-2 px-4">Row 2, Cell 2</td>
                    <td className="py-2 px-4">Row 2, Cell 3</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
