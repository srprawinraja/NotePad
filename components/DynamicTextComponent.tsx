import { Text } from "react-native";
import { v4 as uuidv4 } from 'uuid';




export default function DynamicTextComponent(content:string, searchText:string){
    const id = uuidv4();
    const split = content.replace(searchText, id);

    return (
        {
            content
        }
        
    );
}