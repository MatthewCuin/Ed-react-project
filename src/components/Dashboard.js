import { useReducer } from 'react';
import CharacterCount from './CharacterCount';
import CharacterMap from './CharacterMap';

const reducer = (state, action) => {
    return {
        ...state,
        [action]: !state[action]
    }
    }
    export default function Dashboard() {
    const [tabs, toggleTabs] = useReducer(reducer, {
        characterCount: true,
        wordCount: true,
        characterMap: true
    });

    return(
        <>
        <div className=" p-8 md:flex justify-center space-x-2 justify-items-stretch border-black">
            <button className="border-2 border-grey-500 hover:border-gray-500"
                onClick={() => toggleTabs('characterCount')}
                >
                    Character Count
                </button>
        </div>
        <CharacterCount show={tabs.characterCount} />
        <div className=" p-8 md:flex justify-center space-x-2 justify-items-stretch">
            <button className="border-2 border-grey-500 hover:border-gray-500"
                onClick={() => toggleTabs('characterMap')}
                >
                    Character Map
                </button>
        </div>
        <CharacterMap show={tabs.characterMap} />
    </>
    )
}