import { AuthProvider } from "./Auth-context";
import { NotesProvider } from "./NotesAction-context";
import { ThemeProvider } from "./Theme-context";


const StateProvider = ({children})=>{
    return(
        <ThemeProvider>
        <AuthProvider>
            <NotesProvider>
            {children}
            </NotesProvider>
        </AuthProvider>
        </ThemeProvider>
    );
}

export {StateProvider};