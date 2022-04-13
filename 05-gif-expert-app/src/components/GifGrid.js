import React from 'react'
import { useFechGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const {data:images,loading}= useFechGifs(category);    

    return (
        <>
            <h3 className='animate__animated animate__fadeInRight'>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className='card-grid contenedor'>
                {
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}
