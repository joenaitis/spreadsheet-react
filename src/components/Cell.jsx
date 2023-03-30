import { useEffect, useState } from 'react'

export default function Cell({ value, x, y, updateValue }) {
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        window.document.addEventListener('unselectAll', () => {
            setSelected(false)
        })
    }, [])

    if (selected) {
        return (
            <input
                className='p-3 border-2'
                value={value}
                onChange = {(e) =>{
                    updateValue(x,y, e.target.value)
                }}
            />
        )
    }



    return (
        <div
            className='p-3 border-2'
            onClick={(e) => {
                window.document.dispatchEvent(new Event('unselectAll'))
                setSelected(true)
            }}>
            {value || <span className='text-gray-200'>-</span>}
        </div>
    )
}

