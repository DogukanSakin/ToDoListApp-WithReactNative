import React,{FC} from 'react';
import { Text,View,TouchableWithoutFeedback } from 'react-native';
import styles from './TaskCard.style';
interface ICardProps{
    isCompleted:boolean;
    item:any;
    onDelete:()=>void;
}
const TaskCard:FC<ICardProps>=({isCompleted,item,onDelete})=>{
    return(
        isCompleted ?
        <TouchableWithoutFeedback onLongPress={onDelete}>
        <View style={styles.completedContainer}>
            <Text style={styles.completedTaskText}>{item.task}</Text>
        </View>
        </TouchableWithoutFeedback>
     
        :

        <TouchableWithoutFeedback onLongPress={onDelete}>
        <View style={styles.container}>
            <Text style={styles.taskText}>{item.task}</Text>
        </View>
        </TouchableWithoutFeedback>
       
        
       
    )
}
export default TaskCard;