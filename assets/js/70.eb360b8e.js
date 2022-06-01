(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{491:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[t._v("#")]),t._v(" Versioning")]),t._v(" "),a("p",[t._v("The definition code of a Cadence "),a("Term",{attrs:{term:"workflow"}}),t._v(" must be deterministic because Cadence uses "),a("Term",{attrs:{term:"event"}}),t._v(" sourcing\nto reconstruct the "),a("Term",{attrs:{term:"workflow"}}),t._v(" state by replaying the saved history "),a("Term",{attrs:{term:"event"}}),t._v(" data on the "),a("Term",{attrs:{term:"workflow"}}),t._v("\ndefinition code. This means that any incompatible update to the "),a("Term",{attrs:{term:"workflow"}}),t._v(" definition code could cause\na non-deterministic issue if not handled correctly.")],1),t._v(" "),a("h2",{attrs:{id:"workflow-getversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow-getversion"}},[t._v("#")]),t._v(" workflow.GetVersion()")]),t._v(" "),a("p",[t._v("Consider the following "),a("Term",{attrs:{term:"workflow"}}),t._v(" definition:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyWorkflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ao "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActivityOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ScheduleToStartTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        StartToCloseTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithActivityOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result1 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result2 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now let's say we have replaced ActivityA with ActivityC, and deployed the updated code. If there\nis an existing "),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" that was started by the original version of the "),a("Term",{attrs:{term:"workflow"}}),t._v(" code, where\nActivityA had already completed and the result was recorded to history, the new version of the "),a("Term",{attrs:{term:"workflow"}}),t._v("\ncode will pick up that "),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" and try to resume from there. However, the "),a("Term",{attrs:{term:"workflow"}}),t._v(" will fail\nbecause the new code expects a result for ActivityC from the history data, but instead it gets the\nresult for ActivityA. This causes the "),a("Term",{attrs:{term:"workflow"}}),t._v(" to fail on the non-deterministic error.")],1),t._v(" "),a("p",[t._v("Thus we use "),a("code",[t._v("workflow.GetVersion().")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\nv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Step1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultVersion "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result2 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\nerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n")])])]),a("p",[t._v("When "),a("code",[t._v("workflow.GetVersion()")]),t._v(" is run for the new "),a("Term",{attrs:{term:"workflow_execution"}}),t._v(", it records a marker in the "),a("Term",{attrs:{term:"workflow"}}),t._v("\nhistory so that all future calls to "),a("code",[t._v("GetVersion")]),t._v(" for this change ID--"),a("code",[t._v("Step 1")]),t._v(" in the example--on this\n"),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" will always return the given version number, which is "),a("code",[t._v("1")]),t._v(" in the example.")],1),t._v(" "),a("p",[t._v("If you make an additional change, such as replacing ActivityC with ActivityD, you need to\nadd some additional code:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Step1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultVersion "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Note that we have changed "),a("code",[t._v("maxSupported")]),t._v(" from 1 to 2. A "),a("Term",{attrs:{term:"workflow"}}),t._v(" that had already passed this\n"),a("code",[t._v("GetVersion()")]),t._v(" call before it was introduced will return "),a("code",[t._v("DefaultVersion")]),t._v(". A "),a("Term",{attrs:{term:"workflow"}}),t._v(" that was run\nwith "),a("code",[t._v("maxSupported")]),t._v(" set to 1, will return 1. New "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" will return 2.")],1),t._v(" "),a("p",[t._v("After you are sure that all of the "),a("Term",{attrs:{term:"workflow_execution",show:"workflow_executions"}}),t._v(" prior to version 1 have completed, you can\nremove the code for that version. It should now look like the following:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Step1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You'll note that "),a("code",[t._v("minSupported")]),t._v(" has changed from "),a("code",[t._v("DefaultVersion")]),t._v(" to "),a("code",[t._v("1")]),t._v(". If an older version of the\n"),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" history is replayed on this code, it will fail because the minimum expected version\nis 1. After you are sure that all of the "),a("Term",{attrs:{term:"workflow_execution",show:"workflow_executions"}}),t._v(" for version 1 have completed, then you\ncan remove 1 so that your code would look like the following:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Step1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Note that we have preserved the call to "),a("code",[t._v("GetVersion()")]),t._v(". There are two reasons to preserve this call:")]),t._v(" "),a("ol",[a("li",[t._v("This ensures that if there is a "),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" still running for an older version, it will\nfail here and not proceed.")],1),t._v(" "),a("li",[t._v("If you need to make additional changes for "),a("code",[t._v("Step1")]),t._v(", such as changing ActivityD to ActivityE, you\nonly need to update "),a("code",[t._v("maxVersion")]),t._v(" from 2 to 3 and branch from there.")])]),t._v(" "),a("p",[t._v("You only need to preserve the first call to "),a("code",[t._v("GetVersion()")]),t._v(" for each "),a("code",[t._v("changeID")]),t._v(". All subsequent calls to\n"),a("code",[t._v("GetVersion()")]),t._v(" with the same change ID are safe to remove. If necessary, you can remove the first\n"),a("code",[t._v("GetVersion()")]),t._v(" call, but you need to ensure the following:")]),t._v(" "),a("ul",[a("li",[t._v("All executions with an older version are completed.")]),t._v(" "),a("li",[t._v("You can no longer use "),a("code",[t._v("Step1")]),t._v(" for the changeID. If you need to make changes to that same part in\nthe future, such as change from ActivityD to ActivityE, you would need to use a different changeID\nlike "),a("code",[t._v("Step1-fix2")]),t._v(", and start minVersion from DefaultVersion again. The code would look like the\nfollowing:")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Step1-fix2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultVersion "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActivityE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Upgrading a "),a("Term",{attrs:{term:"workflow"}}),t._v(" is straightforward if you don't need to preserve your currently running\n"),a("Term",{attrs:{term:"workflow_execution",show:"workflow_executions"}}),t._v(". You can simply terminate all of the currently running "),a("Term",{attrs:{term:"workflow_execution",show:"workflow_executions"}}),t._v(" and\nsuspend new ones from being created while you deploy the new version of your "),a("Term",{attrs:{term:"workflow"}}),t._v(" code, which does\nnot use "),a("code",[t._v("GetVersion()")]),t._v(", and then resume "),a("Term",{attrs:{term:"workflow"}}),t._v(" creation. However, that is often not the case, and\nyou need to take care of the currently running "),a("Term",{attrs:{term:"workflow_execution",show:"workflow_executions"}}),t._v(", so using "),a("code",[t._v("GetVersion()")]),t._v(" to update\nyour code is the method to use.")],1),t._v(" "),a("p",[t._v("However, if you want your currently running "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" to proceed based on the current "),a("Term",{attrs:{term:"workflow"}}),t._v(" logic,\nbut you want to ensure new "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" are running on new logic, you can define your "),a("Term",{attrs:{term:"workflow"}}),t._v(" as a\nnew "),a("code",[t._v("WorkflowType")]),t._v(", and change your start path (calls to "),a("code",[t._v("StartWorkflow()")]),t._v(") to start the new "),a("Term",{attrs:{term:"workflow"}}),t._v("\ntype.")],1),t._v(" "),a("h2",{attrs:{id:"sanity-checking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sanity-checking"}},[t._v("#")]),t._v(" Sanity checking")]),t._v(" "),a("p",[t._v("The Cadence client SDK performs a sanity check to help prevent obvious incompatible changes.\nThe sanity check verifies whether a "),a("Term",{attrs:{term:"decision"}}),t._v(" made in replay matches the "),a("Term",{attrs:{term:"event"}}),t._v(" recorded in history,\nin the same order. The "),a("Term",{attrs:{term:"decision"}}),t._v(" is generated by calling any of the following methods:")],1),t._v(" "),a("ul",[a("li",[t._v("workflow.ExecuteActivity()")]),t._v(" "),a("li",[t._v("workflow.ExecuteChildWorkflow()")]),t._v(" "),a("li",[t._v("workflow.NewTimer()")]),t._v(" "),a("li",[t._v("workflow.Sleep()")]),t._v(" "),a("li",[t._v("workflow.SideEffect()")]),t._v(" "),a("li",[t._v("workflow.RequestCancelWorkflow()")]),t._v(" "),a("li",[t._v("workflow.SignalExternalWorkflow()")]),t._v(" "),a("li",[t._v("workflow.UpsertSearchAttributes()")])]),t._v(" "),a("p",[t._v("Adding, removing, or reordering any of the above methods triggers the sanity check and results in\na non-deterministic error.")]),t._v(" "),a("p",[t._v("The sanity check does not perform a thorough check. For example, it does not check on the "),a("Term",{attrs:{term:"activity"}}),t._v("'s\ninput arguments or the timer duration. If the check is enforced on every property, then it becomes\ntoo restricted and harder to maintain the "),a("Term",{attrs:{term:"workflow"}}),t._v(" code. For example, if you move your "),a("Term",{attrs:{term:"activity"}}),t._v(" code\nfrom one package to another package, that changes the "),a("code",[t._v("ActivityType")]),t._v(", which technically becomes a different\n"),a("Term",{attrs:{term:"activity"}}),t._v(". But, we don't want to fail on that change, so we only check the function name part of the\n"),a("code",[t._v("ActivityType")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);