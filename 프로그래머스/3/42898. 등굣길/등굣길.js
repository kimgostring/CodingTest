function solution(m, n, puddles) {
    const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
    for (const cord of puddles) dp[cord[1]][cord[0]] = -1;
    dp[0][1] = 1;
    
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (dp[i][j] === -1) dp[i][j] = 0;
        else {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            dp[i][j] = dp[i][j] % 1000000007
        };
      }
    } 
    
    return dp[n][m];
}