/*Funkcija, kas konsolē izvada n-to Fibonači skaitli */
function fibonaci(a) {
    if (a<1) {
        console.log("Šis skaitlis ir nederīgs")
        else
        {
            
        }
    }
}


/*Funkcija, kas konsolē izvada trīsstūra tipu, ja ievada 3 malu garumus */
function tristips(a,b,c) {
    if((a==undefined) || (b==undefined) || (c==undefined)) 
        console.log("Nav visi dati")
        else
    {
        if(a>b+c, b>a+c, c>a+b) {
            console.log("Trīsstūris nav iespējams")
        }   else
            {
                if(a==b==c) {
                    console.log("Trīsstūris ir vienādmalu")
                }   else
                    {
                        if((a==b) || (a==c) || (b==c)) {
                            console.log("Trīsstūris ir vienādsānu")
                        }   else
                            {
                                let malas = [a,b,c];
                                malas.sort();
                                a=malas[0]
                                b=malas[1]
                                c=malas[2]
                                if((c*c)==(a*a+b*b))
                                console.log("Trīsstūris ir taisnleņķa")
                            }
            }

    }
}