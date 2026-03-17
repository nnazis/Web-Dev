int a[10];
int i = 0; i < 10; i++ 
    cin >> a[i];

int S = 0;
int K = 0;
int i  = 1; i < 11; i++ 
    a[i] > 0
    yes:
        S = S + a[i];
        K = K + 1;
    
    K > 0
    yes:
    int SA = S / K;
    cout << SA << endl;
