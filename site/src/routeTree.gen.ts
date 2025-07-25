/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TeamsTeamSymbolIndexImport } from './routes/teams/$teamSymbol/index'
import { Route as TeamsTeamSymbolSeasonImport } from './routes/teams/$teamSymbol/$season'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TeamsTeamSymbolIndexRoute = TeamsTeamSymbolIndexImport.update({
  id: '/teams/$teamSymbol/',
  path: '/teams/$teamSymbol/',
  getParentRoute: () => rootRoute,
} as any)

const TeamsTeamSymbolSeasonRoute = TeamsTeamSymbolSeasonImport.update({
  id: '/teams/$teamSymbol/$season',
  path: '/teams/$teamSymbol/$season',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/teams/$teamSymbol/$season': {
      id: '/teams/$teamSymbol/$season'
      path: '/teams/$teamSymbol/$season'
      fullPath: '/teams/$teamSymbol/$season'
      preLoaderRoute: typeof TeamsTeamSymbolSeasonImport
      parentRoute: typeof rootRoute
    }
    '/teams/$teamSymbol/': {
      id: '/teams/$teamSymbol/'
      path: '/teams/$teamSymbol'
      fullPath: '/teams/$teamSymbol'
      preLoaderRoute: typeof TeamsTeamSymbolIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/teams/$teamSymbol/$season': typeof TeamsTeamSymbolSeasonRoute
  '/teams/$teamSymbol': typeof TeamsTeamSymbolIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/teams/$teamSymbol/$season': typeof TeamsTeamSymbolSeasonRoute
  '/teams/$teamSymbol': typeof TeamsTeamSymbolIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/teams/$teamSymbol/$season': typeof TeamsTeamSymbolSeasonRoute
  '/teams/$teamSymbol/': typeof TeamsTeamSymbolIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/teams/$teamSymbol/$season' | '/teams/$teamSymbol'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/teams/$teamSymbol/$season' | '/teams/$teamSymbol'
  id: '__root__' | '/' | '/teams/$teamSymbol/$season' | '/teams/$teamSymbol/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TeamsTeamSymbolSeasonRoute: typeof TeamsTeamSymbolSeasonRoute
  TeamsTeamSymbolIndexRoute: typeof TeamsTeamSymbolIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TeamsTeamSymbolSeasonRoute: TeamsTeamSymbolSeasonRoute,
  TeamsTeamSymbolIndexRoute: TeamsTeamSymbolIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/teams/$teamSymbol/$season",
        "/teams/$teamSymbol/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/teams/$teamSymbol/$season": {
      "filePath": "teams/$teamSymbol/$season.tsx"
    },
    "/teams/$teamSymbol/": {
      "filePath": "teams/$teamSymbol/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
