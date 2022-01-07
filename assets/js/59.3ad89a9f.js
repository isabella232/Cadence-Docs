(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{480:function(t,e,a){"use strict";a.r(e);var s=a(13),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"activity-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activity-overview"}},[t._v("#")]),t._v(" Activity overview")]),t._v(" "),a("p",[t._v("An "),a("Term",{attrs:{term:"activity"}}),t._v(" is the implementation of a particular "),a("Term",{attrs:{term:"task"}}),t._v(" in the business logic.")],1),t._v(" "),a("p",[a("Term",{attrs:{term:"activity",show:"Activities"}}),t._v(" are implemented as functions. Data can be passed directly to an "),a("Term",{attrs:{term:"activity"}}),t._v(" via function\nparameters. The parameters can be either basic types or structs, with the only requirement being that\nthe parameters must be serializable. Though it is not required, we recommend that the first parameter\nof an "),a("Term",{attrs:{term:"activity"}}),t._v(" function is of type "),a("code",[t._v("context.Context")]),t._v(", in order to allow the "),a("Term",{attrs:{term:"activity"}}),t._v(" to interact with\nother framework methods. The function must return an "),a("code",[t._v("error")]),t._v(" value, and can optionally return a result\nvalue. The result value can be either a basic type or a struct with the only requirement being that\nit is serializable.")],1),t._v(" "),a("p",[t._v("The values passed to "),a("Term",{attrs:{term:"activity",show:"activities"}}),t._v(" through invocation parameters or returned through the result value\nare recorded in the execution history. The entire execution history is transferred from the Cadence\nservice to "),a("Term",{attrs:{term:"workflow_worker",show:"workflow_workers"}}),t._v(" with every "),a("Term",{attrs:{term:"event"}}),t._v(" that the "),a("Term",{attrs:{term:"workflow"}}),t._v(" logic needs to process. A large execution\nhistory can thus adversely impact the performance of your "),a("Term",{attrs:{term:"workflow"}}),t._v(". Therefore, be mindful of the amount\nof data you transfer via "),a("Term",{attrs:{term:"activity"}}),t._v(" invocation parameters or return values. Otherwise, no additional\nlimitations exist on "),a("Term",{attrs:{term:"activity"}}),t._v(" implementations.")],1),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The following example demonstrates a simple "),a("Term",{attrs:{term:"activity"}}),t._v(" that accepts a string parameter, appends a word\nto it, and then returns a result.")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" simple\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"context"')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/cadence/activity"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/zap"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SimpleActivity is a sample Cadence activity function that takes one parameter and")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns a string containing the parameter value.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SimpleActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SimpleActivity called."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Processed: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Let's take a look at each component of this activity.")]),t._v(" "),a("h3",{attrs:{id:"declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaration"}},[t._v("#")]),t._v(" Declaration")]),t._v(" "),a("p",[t._v("In the Cadence programing model, an "),a("Term",{attrs:{term:"activity"}}),t._v(" is implemented with a function. The function declaration specifies the parameters the "),a("Term",{attrs:{term:"activity"}}),t._v(" accepts as well as any values it might return. An "),a("Term",{attrs:{term:"activity"}}),t._v(" function can take zero or many "),a("Term",{attrs:{term:"activity"}}),t._v(" specific parameters and can return one or two values. It must always at least return an error value. The "),a("Term",{attrs:{term:"activity"}}),t._v(" function can accept as parameters and return as results any serializable type.")],1),t._v(" "),a("p",[a("code",[t._v("func SimpleActivity(ctx context.Context, value string) (string, error)")])]),t._v(" "),a("p",[t._v("The first parameter to the function is context.Context. This is an optional parameter and can be omitted. This parameter is the standard Go context.\nThe second string parameter is a custom "),a("Term",{attrs:{term:"activity"}}),t._v(" specific parameter that can be used to pass data into the "),a("Term",{attrs:{term:"activity"}}),t._v(" on start. An "),a("Term",{attrs:{term:"activity"}}),t._v(" can have one or more such parameters. All parameters to an "),a("Term",{attrs:{term:"activity"}}),t._v(" function must be serializable, which essentially means that params can’t be channels, functions, variadic, or unsafe pointers.\nThe "),a("Term",{attrs:{term:"activity"}}),t._v(" declares two return values: string and error. The string return value is used to return the result of the "),a("Term",{attrs:{term:"activity"}}),t._v(". The error return value is used to indicate that an error was encountered during execution.")],1),t._v(" "),a("h3",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("You can write "),a("Term",{attrs:{term:"activity"}}),t._v(" implementation code in the same way that you would any other Go service code.\nAdditionally, you can use the usual loggers and metrics controllers, and the standard Go concurrency\nconstructs.")],1),t._v(" "),a("h4",{attrs:{id:"heart-beating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heart-beating"}},[t._v("#")]),t._v(" Heart Beating")]),t._v(" "),a("p",[t._v("For long-running "),a("Term",{attrs:{term:"activity",show:"activities"}}),t._v(", Cadence provides an API for the "),a("Term",{attrs:{term:"activity"}}),t._v(" code to report both liveness and\nprogress back to the Cadence managed service.")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("progress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" hasWork "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send heartbeat message to the server.")]),t._v("\n    cadence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RecordActivityHeartbeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" progress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do some work.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    progress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("When an "),a("Term",{attrs:{term:"activity"}}),t._v(" times out due to a missed heartbeat, the last value of the details ("),a("code",[t._v("progress")]),t._v(" in the\nabove sample) is returned from the "),a("code",[t._v("cadence.ExecuteActivity")]),t._v(" function as the details field of "),a("code",[t._v("TimeoutError")]),t._v("\nwith "),a("code",[t._v("TimeoutType_HEARTBEAT")]),t._v(".")],1),t._v(" "),a("p",[t._v("New "),a("strong",[t._v("auto heartbeat")]),t._v(" option in "),a("a",{attrs:{href:"https://github.com/uber-go/cadence-client/releases/tag/v0.17.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cadence Go Client 0.17.0 release"),a("OutboundLink")],1),t._v(":\nIn case you don't need to report progress, but still want to report liveness of your worker through heartbeating for your long running activities, there's a new auto-heartbeat option that you can enable when you register your activity. When this option is enabled Cadence library will do the heartbeat for you in the background.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tRegisterActivityOptions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Automatically send heartbeats for this activity at an interval that is less than the HeartbeatTimeout.")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This option has no effect if the activity is executed with a HeartbeatTimeout of 0.")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Default: false")]),t._v("\n\t\tEnableAutoHeartbeat "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You can also heartbeat an "),a("Term",{attrs:{term:"activity"}}),t._v(" from an external source:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instantiate a Cadence service client.")]),t._v("\ncadence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cadence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Record heartbeat.")]),t._v("\nerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RecordActivityHeartbeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("taskToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The parameters of the "),a("code",[t._v("RecordActivityHeartbeat")]),t._v(" function are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("taskToken")]),t._v(": The value of the binary "),a("code",[t._v("TaskToken")]),t._v(" field of the "),a("code",[t._v("ActivityInfo")]),t._v(" struct retrieved inside\nthe "),a("Term",{attrs:{term:"activity"}}),t._v(".")],1),t._v(" "),a("li",[a("code",[t._v("details")]),t._v(": The serializable payload containing progress information.")])]),t._v(" "),a("h4",{attrs:{id:"cancellation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancellation"}},[t._v("#")]),t._v(" Cancellation")]),t._v(" "),a("p",[t._v("When an "),a("Term",{attrs:{term:"activity"}}),t._v(" is cancelled, or its "),a("Term",{attrs:{term:"workflow_execution"}}),t._v(" has completed or failed, the context passed\ninto its function is cancelled, which sets its channel’s closed state to "),a("code",[t._v("Done")]),t._v(". An "),a("Term",{attrs:{term:"activity"}}),t._v(" can use that\nto perform any necessary cleanup and abort its execution. Cancellation is only delivered to "),a("Term",{attrs:{term:"activity",show:"activities"}}),t._v("\nthat call "),a("code",[t._v("RecordActivityHeartbeat")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),a("p",[t._v("To make the "),a("Term",{attrs:{term:"activity"}}),t._v(" visible to the "),a("Term",{attrs:{term:"worker"}}),t._v(" process hosting it, the "),a("Term",{attrs:{term:"activity"}}),t._v(" must be registered via a\ncall to "),a("code",[t._v("activity.Register")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This call creates an in-memory mapping inside the "),a("Term",{attrs:{term:"worker"}}),t._v(" process between the fully qualified function\nname and the implementation. If a "),a("Term",{attrs:{term:"worker"}}),t._v(" receives a request to start an "),a("Term",{attrs:{term:"activity"}}),t._v(" execution for an\n"),a("Term",{attrs:{term:"activity"}}),t._v(" type it does not know, it will fail that request.")],1),t._v(" "),a("h2",{attrs:{id:"failing-an-activity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failing-an-activity"}},[t._v("#")]),t._v(" Failing an Activity")]),t._v(" "),a("p",[t._v("To mark an "),a("Term",{attrs:{term:"activity"}}),t._v(" as failed, the "),a("Term",{attrs:{term:"activity"}}),t._v(" function must return an error via the "),a("code",[t._v("error")]),t._v(" return value.")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);