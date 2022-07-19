export default function UnpackDescription(data){
    let fullContent = '';
        for (let index = 0; index < data.content.length; index++) {
            fullContent = fullContent + data.content[index].content[0].value + '\n';
        }
    return fullContent;
}