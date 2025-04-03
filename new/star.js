// for (let i = 0; i <= 4; i++) {
//     for (let j = 0; j <= 4; j++) {
//         if (j == 0 || j==4 || i == 0 || i == 4 || i == 4/2)
//             process.stdout.write("* ");
//         else
//             process.stdout.write("  ");
//     }
//     console.log("\n")
// }
for (let i = 0; i <= 4; i++) {
    for(let sp = 4 ; sp >=i+1 ; sp--){
        process.stdout.write("     ")
    }
    for (let j = i; j <= i*2; j++) {
            process.stdout.write("*    ");
    }
    for (let j = i+1; j <= i*2; j++) {
            process.stdout.write("*    ");
    }
    console.log("\n")
}