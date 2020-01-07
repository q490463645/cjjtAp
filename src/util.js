export default {
    createGuid : function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    },
    fmoney:  function (s, n) {
        n = n >= 1 && n <= 5? n : 1;   
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
        var l = s.split(".")[0].split("").reverse(),   
        r = s.split(".")[1];   
        var t = "";   
        for(var i = 0; i < l.length; i ++ )   
        {   
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
        }   
        return t.split("").reverse().join("") + "." + r;       
    }
}