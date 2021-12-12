var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    updatedImage=images[i];
    updatedName=names[i];

    //Debug the code to store list of images in updatedImage. Use images[i]
    //var images = ["https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
   // console.log("updatedImage");
     document.getElementById("family_member_image").src = updatedImage;
    // var firstimage = updatedImage[0];
    // console.log("firstimage");
   
    // var secondimage = updatedImage = [1];
    // console.log("secondimage");
  
    // var thirdimage = updatedImage = [2];
    // console.log("thirdimage");
    // //Debug the code to store list of names in updatedName. Use names[i]
    // var updatedName = ["Ranbir singh","Diljeet Singh","Rocky Singh", "Alia Singh", "Soni Singh"] ;
    // console.log("updatedName");
     document.getElementById("family_member_name").innerHTML = updatedName;

    // var firstname = updatedName = [0];
    // console.log("firstname");
    // document.getElementById("access_first_element").innerHTML= firstname;
  

    // var secondname = updatedName = [1];
    // console.log("secondname");
    // document.getElementById("access_second_element").innerHTML= secondname;

    // var thirdname = updatedName = [2];

    // console.log("thirdimage");
}
