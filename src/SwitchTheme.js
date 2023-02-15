import { useSite } from "./context";

export default function SwitchTheme() {

    const { theme, dispatch } = useSite()

    // const switchTheme = () => {
    //     dispatch({
            // type: 'SWITCH_THEME',
            // value: theme === 'light' ? 'dark' : 'light',
    //     })
    // }

    const toggleTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }

    return (
        <div>
            Mevcut tema = {theme} <br />
            <button onClick={toggleTheme}>Temayı Değiştir</button>
        </div>
    )
}