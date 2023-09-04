import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUI } from '../../providers/ui'

export const Header = function Header() {
  const { term, activeFilter, setUiState } = useUI()
  const [search, setSearch] = useState(
    window.matchMedia('(min-width: 767px)').matches
  )

  return (
    <div className="w-full flex md:bg-indigo-950 sticky top-0 z-50">
      <div className="relative flex-col md:flex-row md:justify-between md:items-center md:gap-96 flex w-full lg:max-w-5xl xl:max-w-7xl mx-auto">
        <div className="bg-indigo-950 py-4 justify-start items-center gap-6 flex flex-1 border-none">
          <div className="w-60 flex-col justify-start items-start gap-2 inline-flex">
            <Link
              className="h-14 flex-col justify-start items-end gap-1 flex pl-4"
              to="/"
            >
              <div className="w-48 h-8 pr-px justify-center items-center gap-3 inline-flex">
                <div className="justify-center items-center inline-flex">
                  <div className="relative justify-start items-center flex">
                    <img className="mr-1" src="./icons/logo-mark.svg" />
                    <div className="">
                      <img
                        className="w-[160px] h-[34px]"
                        src="./icons/oss-check.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-end items-center gap-2 inline-flex">
                <div className="text-center text-white text-xs font-semibold leading-none">
                  by
                </div>
                <div className="w-20 h-3 relative">
                  <img src="./icons/nf-logo.svg" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute right-4 top-7 flex items-center space-x-4 md:hidden">
          <button
            type="button"
            onClick={() =>
              setUiState(s => ({ ...s, activeFilter: !activeFilter }))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-white w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
            </svg>
          </button>
          <button type="button" onClick={() => setSearch(!search)}>
            <svg
              className="text-white w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
        <div
          className={`md:w-72 bg-gray-100 md:bg-transparent md:px-0 md:py-3 ${
            search ? 'flex  pt-4 px-4' : 'h-0 overflow-hidden p-0'
          }`}
        >
          <div className="relative w-full">
            <svg
              className="text-gray-500 w-5 h-5 absolute top-3.5 left-3"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              name="term"
              className="w-full pl-10 pr-2 py-3 bg-gray-50 rounded-lg border border-gray-200 flex-col justify-center items-start gap-2 flex"
              placeholder="Search"
              value={term}
              onChange={e => setUiState(s => ({ ...s, term: e.target.value }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
