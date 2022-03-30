
function formatArr(arr) {

    let newArr=[];

    arr.forEach(element => {

    let data=element.split(",");
    let name=data[0].split(" ");
    let outPut=`${name[0]}: {second name: ${name[1]}, age:${data[1]}}`;
    newArr.push(outPut)
  })
  return newArr
}

let array = ["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22",
                "Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]

console.log(formatArr(array))
    