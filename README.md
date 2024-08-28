# switch-vs-object
Here I test the speed of the switch case in comparison with getting the value from the object by key

The project features switch cases with 100,000 and 15 conditions, as well as objects with 100,000 and 15 keys. Additionally, there is a generator that allows you to create switch cases and objects of any size, and test their performance using a separate script.

To run performance tests with pre-defined data, execute `node speedTest`.

Feel free to adjust any specific details if needed!

---

Here is my own tests for size=100000:

<img width="463" alt="image" src="https://github.com/user-attachments/assets/43cf1f23-36f8-4200-8d24-3debd8be68fc">

Not bad, right? But with a length close to reality, the difference in time will become negligible, won’t it?

<img width="449" alt="image" src="https://github.com/user-attachments/assets/c53a046b-570a-4460-84e2-f0b05ce4decd">

## Object superiority!

P.S. I hope the comparison was objective and unbiased.
