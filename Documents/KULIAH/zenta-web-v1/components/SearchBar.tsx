'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaWindowClose, FaSearch } from 'react-icons/fa';
import { Slug } from 'sanity';
import { client } from '../lib/sanity.client';
import ClientSideRoute from './ClientSideRoute';
interface SearchResult {
    _id: string;
    title: string;
    slug: Slug;
}
const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [showResults, setShowResults] = useState(false);
    const clearSearch = () => {
        setShowResults(false);
        setResults([]);
    };
    const handleSearch = async () => {
        if (query.length == 0) {
            clearSearch();
        } else {
            const searchQuery = `*[_type == "post" && title match "${query}*"] {title,slug}`;

            try {
                const searchResults = await client.fetch(searchQuery);
                setResults(searchResults);
            } catch (error) {
                console.error(error);
            }
            setShowResults(true);
        }
    }
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                setShowResults(false);

            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [divRef]);
    return (
        <div
            className="relative" ref={divRef}
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onBlur={clearSearch}
                placeholder="Search..."
                aria-label='Search'
                className=" font-cubano  dark:text-black text-white hover:ring ring-teal-700 focus:w-full focus:cursor-text w-full py-2 pl-4 pr-10  bg-gray-800 dark:bg-gray-300 rounded-xl outline-none focus:border-blue-500 transition-colors" />
            <button
                type="button"
                onClick={() => { clearSearch(), setQuery("") }}
                    aria-label='Clear Search'
                className="text-white   absolute flex top-0 right-10 dark:text-black   items-center opacity-50 justify-center h-full w-10 transition-colors hover:text-red-500 focus:outline-none">
                <FaWindowClose />
            </button>

            <button
                type="button"
                onClick={handleSearch}
                    aria-label='Search'
                className="absolute text-white dark:text-black top-0 right-2 sm:right-2 flex items-center justify-center h-full w-10 transition-colors hover:text-blue-500 focus:outline-none">
                <FaSearch />
            </button>


            {showResults && (
                <ul
                    className="absolute hover:visible  bg-gray-800 dark:bg-gray-300 drop-shadow-xl mt-1 rounded-xl content-center flex flex-col p-1 gap-2 w-full max-w-xs mx-auto">
                    {results.map((result) => (
                        <li
                            key={result.title}
                            className=" border-2 border-gray-300 dark:border-gray-800 hover:border-emerald-700 font-Sofia p-1 dark:text-black text-white grid content-center w-full h-12 truncate align-center mx-auto text-center rounded-xl  ">
                            <ClientSideRoute
                                key={result._id}
                                route={`/post/${result.slug.current}`}>
                                <button
                                    onClick={() => (
                                        clearSearch
                                    )}>
                                    {result.title}
                                </button>
                            </ClientSideRoute>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBar