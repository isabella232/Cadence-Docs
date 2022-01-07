(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{454:function(t,e,r){"use strict";r.r(e);var s=r(13),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"task-lists"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#task-lists"}},[t._v("#")]),t._v(" Task lists")]),t._v(" "),r("p",[t._v("When a "),r("Term",{attrs:{term:"workflow"}}),t._v(" invokes an "),r("Term",{attrs:{term:"activity"}}),t._v(", it sends the "),r("code",[t._v("ScheduleActivityTask")]),t._v(" "),r("Term",{attrs:{term:"decision"}}),t._v(" to the\nCadence service. As a result, the service updates the "),r("Term",{attrs:{term:"workflow"}}),t._v(" state and dispatches\nan "),r("Term",{attrs:{term:"activity_task"}}),t._v(" to a "),r("Term",{attrs:{term:"worker"}}),t._v(" that implements the "),r("Term",{attrs:{term:"activity"}}),t._v(".\nInstead of calling the "),r("Term",{attrs:{term:"worker"}}),t._v(" directly, an intermediate queue is used. So the service adds an "),r("em",[r("Term",{attrs:{term:"activity_task"}})],1),t._v(" to this\nqueue and a "),r("Term",{attrs:{term:"worker"}}),t._v(" receives the "),r("Term",{attrs:{term:"task"}}),t._v(" using a long poll request.\nCadence calls this queue used to dispatch "),r("Term",{attrs:{term:"activity_task",show:"activity_tasks"}}),t._v(" an "),r("em",[r("Term",{attrs:{term:"activity_task_list"}})],1),t._v(".")],1),t._v(" "),r("p",[t._v("Similarly, when a "),r("Term",{attrs:{term:"workflow"}}),t._v(" needs to handle an external "),r("Term",{attrs:{term:"event"}}),t._v(", a "),r("Term",{attrs:{term:"decision_task"}}),t._v(" is created.\nA "),r("Term",{attrs:{term:"decision_task_list"}}),t._v(" is used to deliver it to the "),r("Term",{attrs:{term:"workflow_worker"}}),t._v(" (also called "),r("em",[t._v("decider")]),t._v(").")],1),t._v(" "),r("p",[t._v("While Cadence "),r("Term",{attrs:{term:"task_list",show:"task_lists"}}),t._v(" are queues, they have some differences from commonly used queuing technologies.\nThe main one is that they do not require explicit registration and are created on demand. The number of "),r("Term",{attrs:{term:"task_list",show:"task_lists"}}),t._v("\nis not limited. A common use case is to have a "),r("Term",{attrs:{term:"task_list"}}),t._v(" per "),r("Term",{attrs:{term:"worker"}}),t._v(" process and use it to deliver "),r("Term",{attrs:{term:"activity_task",show:"activity_tasks"}}),t._v("\nto the process. Another use case is to have a "),r("Term",{attrs:{term:"task_list"}}),t._v(" per pool of "),r("Term",{attrs:{term:"worker",show:"workers"}}),t._v(".")],1),t._v(" "),r("p",[t._v("There are multiple advantages of using a "),r("Term",{attrs:{term:"task_list"}}),t._v(" to deliver "),r("Term",{attrs:{term:"task",show:"tasks"}}),t._v(" instead of invoking an "),r("Term",{attrs:{term:"activity_worker"}}),t._v(" through a synchronous RPC:")],1),t._v(" "),r("ul",[r("li",[r("Term",{attrs:{term:"worker",show:"Worker"}}),t._v(" doesn't need to have any open ports, which is more secure.")],1),t._v(" "),r("li",[r("Term",{attrs:{term:"worker",show:"Worker"}}),t._v(" doesn't need to advertise itself through DNS or any other network discovery mechanism.")],1),t._v(" "),r("li",[t._v("When all "),r("Term",{attrs:{term:"worker",show:"workers"}}),t._v(" are down, messages are persisted in a "),r("Term",{attrs:{term:"task_list"}}),t._v(" waiting for the "),r("Term",{attrs:{term:"worker",show:"workers"}}),t._v(" to recover.")],1),t._v(" "),r("li",[t._v("A "),r("Term",{attrs:{term:"worker"}}),t._v(" polls for a message only when it has spare capacity, so it never gets overloaded.")],1),t._v(" "),r("li",[t._v("Automatic load balancing across a large number of "),r("Term",{attrs:{term:"worker",show:"workers"}}),t._v(".")],1),t._v(" "),r("li",[r("Term",{attrs:{term:"task_list",show:"Task_lists"}}),t._v(" support server side throttling. This allows you to limit the "),r("Term",{attrs:{term:"task"}}),t._v(" dispatch rate to the pool of "),r("Term",{attrs:{term:"worker",show:"workers"}}),t._v(" and still supports adding a "),r("Term",{attrs:{term:"task"}}),t._v(" with a higher rate when spikes happen.")],1),t._v(" "),r("li",[r("Term",{attrs:{term:"task_list",show:"Task_lists"}}),t._v(" can be used to route a request to specific pools of "),r("Term",{attrs:{term:"worker",show:"workers"}}),t._v(" or even a specific process.")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);