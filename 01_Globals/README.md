# 01_Globals

This example demonstrates using global variables in place of a true module system. Each function
in our module files (`add.js`, `reduce.js`, and `sum.js`) gets defined as a global variable. Notice
that our global "modules" don't define any of their own dependencies. Instead dependency management
is left to the developer. In `index.html` we are forced to declare modules in a specific order so
that there will be no reference errors. The order in which we declare these files is important, think
of each `<script>` tag as a placeholder for all of the code in side a specific file.

Not only do we have to manually manage the dependency chain, but we're also polluting the global namespace.
The downside of this is, if we were to bring in another developer's code and this developer has provided a function
with the same name as one of ours, we would get a collision.

### Disclaimer

In this particular example, it **technically** doesn't matter which file is included first of our three utility modules `add.js`,
`reduce.js`, and `sum.js` because each module is only defining functions and not invoking any code that depends on its dependencies.
The only thing that matters is that all three global "modules" are loaded before `main.js`, because `main.js` is where dependency code
gets executed. In a more complex production scenario, each module may actually run some of its dependency code on initialization which
would yield a much less forgiving example.
