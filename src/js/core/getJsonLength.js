export default function getJsonLength(jsonData){

       let jsonLength = 0;
        for(let item in jsonData){

            jsonLength++;

        }
        return jsonLength;


}