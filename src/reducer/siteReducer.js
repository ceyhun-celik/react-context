export default function reducer(state, action) {
    switch(action.type) {
        // case 'SWITCH_THEME': return {
        //     ...state,
        //     theme: action.value,
        // }

        case 'TOGGLE_THEME':
            const theme = state.theme === 'light' ? 'dark' : 'light'

            localStorage.setItem('theme', theme)

            return {
                ...state,
                theme
            }

        // case 'SWITCH_LANGUAGE': return {
        //     ...state,
        //     language: action.value
        // }

        case 'TOGGLE_LANGUAGE':
            const language = state.language === 'tr' ? 'en' : 'tr'
            
            localStorage.setItem('language', language)

            return {
                ...state,
                language
            }
    }
}