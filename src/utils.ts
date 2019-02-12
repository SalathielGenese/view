export class Utils {
    // static initStats () {
    //     var stats = new Stats();
    //     // 0: fps, 1: ms, 2: mb, 3+: custom
    //     stats.showPanel( 0 ); 
    //     document.body.appendChild( stats.dom );
    //     return stats;
    // }

    static log(message: string) {
        var date = new Date();
        var now = date.getFullYear() + "" 
                + date.getMonth() + "" 
                + date.getDate() 
                + " " 
                + date.getHours() + "" 
                + date.getMinutes() + "" 
                + date.getSeconds();

        console.log("[" + now + "] " + message);
    }
}