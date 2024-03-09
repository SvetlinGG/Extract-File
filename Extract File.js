function extract(str){
    str = str.split('\\').pop().split('.');
    let extension = str.pop();
    console.log(`File name: ${str}\nFile Extension: ${extension}`);
    

}
extract('C:\\Internal\\training-internal\\Template.pptx');
extract('C:\\Projects\\Data-Structures\\LinkedList.cs');