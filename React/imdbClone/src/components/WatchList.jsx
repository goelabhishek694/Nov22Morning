import React from 'react'

function WatchList() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [] ;
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead>  
                <tr className="bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900">Name</th> 
                    <th>
                        <div className="flex">
                            <div>Ratings</div>
                        </div>
                    </th>
                    <th>
                        <div className="flex">
                            <div>Popularity</div>
                        </div>
                    </th>
                    <th>
                        <div className="flex">
                            <div>Genre</div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">  
              {
                watchlist.map(({title, popularity, vote_average, genre_ids, backdrop_path }, idx) => {
                  return (<tr className="hover:bg-gray-50" key={idx}>
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                        <img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
                        <div className="font-medium text-gray-700 text-sm">{title}</div>
                    </td>
                    <td className="pl-6 py-4">
                        {vote_average}
                    </td>
                    <td className="pl-6 py-4">
                        {popularity}
                    </td>
                    <td className="pl-2 py-4">
                        Action
                    </td>
                </tr>)
                })
                
}
            </tbody>
        </table>
    </div>
);
}

export default WatchList
