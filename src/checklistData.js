const checklistData = [
  {
    // 0
    title: "Auditing Account Management and Password Controls",
    question:
      "Review and evaluate procedures for creating Unix or Linux user accounts and ensure that accounts are created only when there’s a legitimate business need. Also review and evaluate processes for ensuring that accounts are removed or disabled in a timely fashion in the event of termination or job change",
    hint: "Interview the system administrators, and review account creation procedures. This process should include some form of verification that every user has a legitimate need for access",
  },
  {
    // 1
    title: "Auditing Account Management and Password Controls",

    question: "Ensure that all UIDs in the password file(s) are unique",
    hint: " use the command more /etc/passwd, and review the entries to ensure that there are no duplicate UIDs",
  },
  {
    // 2
    title: "Auditing Account Management and Password Controls",
    question:
      "Ensure that passwords are shadowed and use strong hashes where possible",
    hint: "To determine whether a shadow password file is being used, type the more /etc/passwd command to view the file. Look within the password field for all accounts. If each account has an “*” or “x” or some other common character in it, the system uses a shadow password file. ",
  },
  {
    // 3
    title: "Auditing Account Management and Password Controls",

    question:
      "Evaluate the file permissions for the password and shadow password files",
    hint: "View the file permissions for these files by using the ls –l command on them. The/etc/passwd file should be writable only by “root,” and the /etc/shadow file also should be readable only by “root.”",
  },
  {
    // 4
    title: "Auditing Account Management and Password Controls",

    question: "Review and evaluate the strength of system passwords.",
    hint: "Unfortunately, the standard Unix passwd program does not provide strong capabilities for preventing weak passwords. Through discussions with the system administrator, you can determine whether other tools have been implemented either to replace or enhance the native passwd functionality for password composition requirements.",
  },
  {
    // 5
    title: "Auditing Account Management and Password Controls",

    question: "Evaluate the use of password controls such as aging. ",
    hint: "Most Linux systems have /etc/login.defs, which provides basic controls such as minimum password length and maximum password age for locally created accounts.",
  },
  {
    // 6
    title: "Auditing Account Management and Password Controls",

    question:
      "Review the process used by the system administrator(s) for setting initial passwords for new users and communicating those passwords",
    hint: "Interview the system administrator, and review documentation to understand themechanism used for creating initial passwords. Ensure that this mechanism results in passwords that are difficult to guess and that comply with your company’s IT securitypolicy. Also, review the channels used for communicating the new passwords to users.Ensure that unencrypted transmissions are not used.",
  },
  {
    // 7
    title: "Auditing Account Management and Password Controls",

    question:
      "Ensure that each account is associated with and can be traced easily to a specific employee.",
    hint: "Review the contents of the password file(s). The owner of each account should be obvious, with the user’s name or other unique identifier (such as employee number) either used as the username",
  },
  {
    // 8
    title: "Auditing Account Management and Password Controls",

    question:
      "Ensure that invalid shells have been placed on all disabled accounts.",
    hint: "Examine the organization's privilege escalation policy",
  },
  {
    // 9
    title: "Auditing Account Management and Password Controls",

    question:
      " Review and evaluate the use of groups, and determine the restrictiveness of their use and evaluate the use of passwords at the group level.",
    hint: "Examine the organization's privilege escalation policy",
  },

  // file auditing
  {
    // 10
    title: "Auditing File Security and Controls",
    question:
      "Evaluate the file permissions for a judgmental sample of critical files and their related directories",
    hint: "Using the ls –l command, examine the permissions on critical system files and their related directories. Question the need for write access to be granted to anyone other than system administration personnel",
  },
  {
    // 11
    title: "Auditing File Security and Controls",
    question:
      "Look for open directories (directories with permission set to drwxrwxrwx) on the system, and determine whether they should have the sticky bit set.",
    hint: "To find just directories with worldwrite permissions, you can use the command find / -type d –perm -777. For any such directories discovered, discuss the function of those directories with the system administrator, and determine the appropriateness of the open permissions.",
  },
  {
    // 12
    title: "Auditing File Security and Controls",
    question:
      "Evaluate the security of all SUID files on the system, especially those that are SUID to 'root.'",
    hint: "find / -perm -u+s. Note that the results of this command will not be complete unless it is run by someone with superuser access. Review the file permissions for those programs, particularly for those that are SUID to root. They should be writable only by the owner.",
  },
  {
    // 13
    title: "Auditing File Security and Controls",
    question: "Review and evaluate security over the kernel",
    hint: "Use the ls –l command on the location of the kernel for the system you are auditing. It should be owned and writable only by the superuser",
  },
  {
    // 14
    title: "Auditing File Security and Controls",
    question:
      "Ensure that all files have a legal owner in the /etc/passwd file.",
    hint: "Have the system administrator perform the quot command (which has to be run by the superuser). This command will show all file owners on the system. Review this list,and ensure that a username, and not a UID, is shown for every entry. If a UID appears, it means that there is no entry in the password file for that UID, which means that the password file could not convert the UID into a username",
  },
  {
    // 15
    title: "Auditing File Security and Controls",
    question:
      "Examine the system’s scheduled atjobs for unusual or suspicious entries.",
    hint: "The atjobs should be located within directory /usr/spool/cron/atjobs or /var/spool/cron/atjobs. By performing the ls –l command on this directory, you can list the contents. The contents of these files can be viewed with the more command. This will allow you to see the commands that are being executed and the schedule for that execution.",
  },

  // Auditing networks
  {
    // 16
    title: "Auditing Network Security and Controls",
    question:
      " Determine what network services are enabled on the system, and validate their necessity with the system administrator.",
    hint: "Use the netstat –an command, and look for lines containing LISTEN or LISTENING. These are the Transmission Control Protocol (TCP) and User Datagram Protocol (UDP)ports on which the host is available for incoming connections. If LSOF is present on the system, then lsof -i can be used. Once you have obtained a list of enabled services, talk through the list with the system administrator to understand the need for each service. Many services are enabled by default and therefore were not enabled consciously by the system administrator. For any services that are not needed, encourage the administrator to disable them.",
  },
  {
    // 17
    title: "Auditing Network Security and Controls",
    question:
      "Execute a network vulnerability scanning tool to check for current vulnerabilities in the environment.",
    hint: "Even though many of these tools are designed to be nondisruptive and do not require access to the system, you should always inform the appropriate IT personnel (such as the system administrator, the network team, and IT security) that you plan to run the tool, and then get their approval and schedule with them a time to execute the tool. Examples Nessus, Chkrootkit",
  },
  {
    // 18
    title: "Auditing Network Security and Controls",
    question:
      "If anonymous FTP is enabled and genuinely needed, ensure that it is locked down properly",
    hint: "To determine whether anonymous FTP is enabled, examine the contents of the password file(s). If you see an “ftp” account in the password file and the FTP service is enabled, then anonymous FTP is available on the system. Once an anonymous FTP user has logged in, he or she is restricted only to those files and directories within the “ftp” account’s home directory. The “ftp” account should not have a valid shell.",
  },
  {
    // 19
    title: "Auditing Network Security and Controls",
    question:
      "Ensure that a legal warning banner is displayed when a user connects to the system.",
    hint: "Via interviews with the system administrator, determine whether the verbiage for this warning banner has been developed in conjunction with the company’s legal department.",
  },
  {
    // 20
    title: "Auditing Network Security and Controls",
    question: "Review and evaluate the use of modems on the server.",
    hint: "Unfortunately, there is no reliable method of determining whether a modem is connected to a machine outside of physical inspection. If physical inspection is not practical, the next best option is to interview the system administrator to understand whether modems are used.",
  },

  // audit logs
  {
    // 21
    title: "Auditing Audit Logs",
    question: "Review controls for preventing direct “root” logins.",
    hint: "Review the wtmp log (by performing the more command on /usr/adm/wtmp, /var/adm/wtmp, or /etc/wtmp depending on the type of system) to verify that there are no direct “root” logins Exceptions would be direct logins from the console, which may be needed for emergencies.",
  },
  {
    // 22
    title: "Auditing Audit Logs",
    question:
      "Review the su and sudo command logs to ensure that when these commands are used, they are logged with the date, time, and user who typed the command.",
    hint: "have the system administrator provide you with a copy of the log and perform the command on it. For some systems, the su log will be at /usr/adm/sulog, /var/adm/sulog, or /var/log/auth.log. Ensure that this file exists and is capturing information on su usage (such as who performed the command, to what account they switched, the date andtime of the command, and indications as to whether or not the command succeeded).",
  },
  {
    // 23
    title: "Auditing Audit Logs",
    question:
      "Evaluate the syslog to ensure that adequate information is being captured.",
    hint: "View the contents of the /etc/syslog.conf file using the more command. The /etc/syslog.conf file determines where each message type is routed (to a filename, to a console, and/or to a user).",
  },

  // security audit
  {
    // 24
    title: "Auditing Security Monitoring and General Controls",
    question:
      "Review and evaluate system administrator procedures for monitoring the state of security on the system.",
    hint: "Interview the system administrator, and review any relevant documentation to get an understanding of security monitoring practices. Numerous levels and methods of security monitoring can be performed. Although all monitoring levels and methods do not need to be performed, you should see some level of monitoring, which should be consistent with the criticality of the system and the inherent risk of the environment",
  },
  {
    // 25
    title: "Auditing Security Monitoring and General Controls",
    question:
      "If you are auditing a larger Unix/Linux environment (as opposed to one or two isolated systems), determine whether a standard build exists for new systems and whether that baseline has adequate security settings. Consider auditing a system freshly created from the baseline.",
    hint: "Through interviews with the system administrator, determine the methodology used for building and deploying new systems. If a standard build is used, audit a newly created system",
  },
  {
    // 25
    title: "Auditing Security Monitoring and General Controls",
    question:
      "Ensure that appropriate physical controls and operations are in place to provide for system protection and availability.",
    hint: "The following topics are likely to be pertinent: Physical security • Environmental controls • Change management • System monitoring • Backup processes • Disaster recovery planning",
  },
];

export default checklistData;
