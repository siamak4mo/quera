#include <stdio.h>
#include <stdlib.h>

#define MAX_P2I 17

#ifdef _DEBUG
#  define log(format, ...) \
  printf (format, ##__VA_ARGS__);
#else
#  define log
#endif

#define lint long long

void
solve (char *p, int len)
{
  lint err = 0;
  for (lint idx=0, pi = 1;
       pi <= len;
       ++idx, pi <<= 1)
    {
      lint begin = (pi > 1) ? pi - 1 : 0;

      log ("R%d: ", pi);
      int xor = 0;
      for (; begin < len; )
        {
          for (lint i=pi; begin < len && i>0; i--, begin++)
            {
              xor ^= p[begin]-'0';
              log ("%i^", begin+1);
            }
          begin += pi;
        }
      log (" ==> %d\n", xor);
      if (xor != 0)
        {
          err |= (1 << idx);
        }
    }

  log ("err: %d\n", err);
  if (err == 0)
    {
      puts ("NO");
    }
  else
    {
      err--;
      if (err >= 0 && err < len)
        {
          puts ("YES");
          if (p[err] == '0')
            p[err] = '1';
          else p[err] = '0';
          printf ("%.*s\n", len, p);
        }
      else
        puts ("INVALID");
    }
}

int
main (void)
{
  int n;
  scanf ("%d\n", &n);

  char *p = malloc (1000000);
  while (n--)
    {
      int len;
      scanf ("%d\n", &len);
      fread (p, len+1, 1, stdin);
      solve (p, len);
    }
  free (p);
  return 0;
}
