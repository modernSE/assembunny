## --- Day 12: Leonardo's Monorail ---
The assembunny code you've got operates on four [registers](https://en.wikipedia.org/wiki/Processor_register) (`a`, `b`, `c`, and `d`) that start at `0` and can hold any [integer](https://en.wikipedia.org/wiki/Integer). However, it seems to make use of only a few [instructions](https://en.wikipedia.org/wiki/Instruction_set):

*   `inc x` _increases_ the value of register `x` by one.
*   `dec x` _decreases_ the value of register `x` by one.
*   `cpy x y` _copies_ `x` (either an integer or the _value_ of a register) into register `y`.
*   `jnz x y` _jumps_ to an instruction `y` away (positive means forward; negative means backward), but only if `x` is _not zero_.

The `jnz` instruction moves relative to itself: an offset of `-1` would continue at the previous instruction, while an offset of `2` would _skip over_ the next instruction.

For example:

    cpy 41 a
    inc a
    inc a
    dec a
    jnz a 2
    dec a
    

The above code would set register `a` to `41`, increase its value by `2`, decrease its value by `1`, and then skip the last `dec a` (because `a` is not zero, so the `jnz a 2` skips it), leaving register `a` at `42`. When you move past the last instruction, the program halts.

After executing the assembunny code in your puzzle input, _what value is left in register `a`?_






318003


[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/modernSE/assembunny) 