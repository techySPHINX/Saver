'use client'
import { EditorBtns } from '@/lib/constants'
import { EditorAction } from './editor-actions'
import { Dispatch, createContext, useContext, useReducer } from 'react'
import { FunnelPage } from '@prisma/client'

export type DeviceTypes = 'Desktop' | 'Mobile' | 'Tablet'

export type EditorElement = {
    id: string
    styles: React.CSSProperties
    name: string
    type: EditorBtns
    content: EditorElement[] | { href?: string; innerText?: string; src?: string }
}

export type Editor = {
    liveMode: boolean
    elements: EditorElement[]
    selectedElement: EditorElement
    device: DeviceTypes
    previewMode: boolean
    funnelPageId: string
}

export type HistoryState = {
    history: Editor[]
    currentIndex: number
}

export type EditorState = {
    editor: Editor
    history: HistoryState
}

const initialEditorState: EditorState['editor'] = {
    elements: [
        {
            content: [],
            id: '__body',
            name: 'Body',
            styles: {},
            type: '__body',
        },
    ],
    selectedElement: {
        id: '',
        content: [],
        name: '',
        styles: {},
        type: null,
    },
    device: 'Desktop',
    previewMode: false,
    liveMode: false,
    funnelPageId: '',
}

const initialHistoryState: HistoryState = {
    history: [initialEditorState],
    currentIndex: 0,
}

const initialState: EditorState = {
    editor: initialEditorState,
    history: initialHistoryState,
}


const deleteAnElement = (
    editorArray: EditorElement[],
    action: EditorAction
): EditorElement[] => {
    if (action.type !== 'DELETE_ELEMENT')
        throw Error(
            'You sent the wrong action type to the Delete Element editor State'
        )
    return editorArray.filter((item) => {
        if (item.id === action.payload.elementDetails.id) {
            return false
        } else if (item.content && Array.isArray(item.content)) {
            item.content = deleteAnElement(item.content, action)
        }
        return true
    })
}
