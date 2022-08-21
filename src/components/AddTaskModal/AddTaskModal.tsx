import React,{FC,useState} from 'react';
import { Text,View,TextInput,TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import styles from './AddTaskModal.style';
interface IModalProps{
    isVisible:boolean;
    onClose:()=>void;
    onAddTask:(taskContent:string)=>void;
}
const AddTaskModal:FC<IModalProps>=({isVisible,onClose,onAddTask})=>{
    const [taskInputValue,setTaskInputValue]=useState<string>();
    function handleAddTask(){
        if(taskInputValue){
            onAddTask(taskInputValue);
        }
        setTaskInputValue('');
        
    }
    return(
        <Modal isVisible={isVisible} style={styles.modalContainer} onBackdropPress={onClose}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Add a task to your list</Text>
                <TextInput style={styles.input} placeholder='Task...' placeholderTextColor='white' multiline={true} onChangeText={(t)=>setTaskInputValue(t)} value={taskInputValue}></TextInput>
                <TouchableWithoutFeedback onPress={handleAddTask}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonPlaceHolder}>Add the task</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}
export default AddTaskModal;