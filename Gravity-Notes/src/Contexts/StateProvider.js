import { AuthProvider } from "./Auth-context";
import { NotesProvider } from "./NotesAction-context";


const StateProvider = ({children})=>{
    return(
        <AuthProvider>
            <NotesProvider>
            {children}
            </NotesProvider>
        </AuthProvider>
    );
}

export {StateProvider};