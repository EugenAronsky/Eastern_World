export default function UnpackDescription(description){
    let fullContent = '';
        for (let index = 0; index < description.content.length; index++) {
            fullContent = fullContent + description.content[index].content[0].value + '\n';
        }
    return fullContent;
}