
        function addition() 
        {
            a = document.minicalc.a.value;
            b = document.minicalc.b.value;
            addition = Number(a) + Number(b);
            
            document.minicalc.c.value= "= "+addition
            document.minicalc.h.value=">> Clear <<"
        }

        function substraction()
        {
            a = document.minicalc.a.value;
            b = document.minicalc.b.value;
            substraction = a - b

            document.minicalc.c.value= "= "+substraction
            document.minicalc.h.value=">> Clear <<"
        }

        function multiplication()
        {
          a = document.minicalc.a.value;
          b = document.minicalc.b.value;
          multiplication = a * b

          document.minicalc.c.value= "= "+multiplication
          document.minicalc.h.value=">> Clear <<"
        }

        function division()
        {
          a = document.minicalc.a.value;
          b = document.minicalc.b.value;
          division = a / b

          document.minicalc.c.value= "= "+division
          document.minicalc.h.value=">> Clear <<"
        }
