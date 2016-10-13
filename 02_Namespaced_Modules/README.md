# 02_Namespaced_Modules

In this example we're not defining each module function in the global scope therefore these
functions are never becoming global variables. Instead, we're attaching each function to some
object as a property. This over-arching object appears in the global scope and will be the only
global variable we introduce. The benefit of this is that we're not polluting the global namespace,
however we're still manually managing all of our dependencies in `index.html`.
