import { useSite } from './context'

export default function SwitchLanguage() {

    const { language, dispatch } = useSite()

    // const switchLanguage = () => {
    //     dispatch({
    //         type: 'SWITCH_LANGUAGE',
    //         value: language === 'tr' ? 'en' : 'tr', 
    //     })
    // }

    const toggleLanguage = () => {
        dispatch({
            type: 'TOGGLE_LANGUAGE',
        })
    }

    return (
        <div>
            Mevcut dil = {language} <br />
            <button onClick={toggleLanguage}>Dili Değiştir</button>
        </div>
    )
}