function solution(begin, target, words) {
    if (words[target] === undefined) return 0;
    
    let ans = 0;
    let visited = [];
    let queue = [];
    
    queue.push([begin, ans]);
    
    while(queue) {
        let [visit, cnt] = queue.shift();
        if (visit === target) {
            return cnt;
        }

        words.forEach(word => {
            let notEqual = 0;
            
            if(visited.includes(word)) return;

            for (let i=0; i<word.length; i++) {
                if (word[i] !== v[i]) notEqual++; 
            }
            
            if (notEqual === 1) {
                queue.push([word, ++cnt]);
                visited.push(word);
            }
        });
    }
    
    return ans;
}