# 02_Namespaced_Modules

In this example we're not defining each module function in the global scope therefore these
functions are never becoming global variables. Instead, we're attaching each function to some
object as a property. This over-arching object appears in the global scope and will act as our
library's namespace. The benefit of this is that we're not polluting the global namespace and
therefore collisions are easily prevented, but we're still manually depending all of our dependencies.
